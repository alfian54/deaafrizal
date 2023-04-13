const http = require("http");
const rupiah = require("rupiah-format");
const fs = require("fs");
const os = require("os");
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  const nama = "Alfian Jhonatan";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  //   Save a file
  //   fs.appendFile("sisauang.txt", sisa, () => {
  //     console.log("data uang berhasil disimpan");
  //   });

  const sisaRAM = os.freemem();
  const jumlahCPU = os.cpus();

  function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model);
    });
    return myCPU[0];
  }
  const hasil = `
  <html>
    <head>
        <title>${nama}</title>
    </head>
    <body>
    <h1 style='background:black; color:white; padding:10px; text-align:center'>NODE JS</h1>
    <p>halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}</p>
    <h5>Sisa RAM saya : ${sisaRAM}</h5>
    <h5>Jumlah CPU saya : ${checkCPU()}</h5>
    </body>
  </html>`;
  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server nyala di ${host}:${port} 💛`);
});
