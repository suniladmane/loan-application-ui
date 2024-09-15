var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error processing file upload.');
        return;
      }

      var oldpath = files.filetoupload.filepath;
      var newpath = path.join(__dirname, 'uploads', files.filetoupload.originalFilename);

      // Ensure the 'uploads' directory exists
      fs.mkdir(path.dirname(newpath), { recursive: true }, (err) => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error creating directory.');
          return;
        }

        fs.rename(oldpath, newpath, function (err) {
          if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error moving file.');
            return;
          }
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('File uploaded and moved!');
        });
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080, () => {
  console.log('Server is listening on port 8080');
});
