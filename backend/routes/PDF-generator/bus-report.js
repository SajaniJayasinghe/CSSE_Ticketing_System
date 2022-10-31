const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const fs = require("fs");
const PDFDocument = require("./pdfkit-tables");

router.post("/generatebusreport", async function (req, res, next) {
  //load cuurent time
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();
  var datestamp = "DATE:- " + year + "-" + (month + 1) + "-" + date;

  const BusRequest = req.body.bus;
  console.log(BusRequest);

  // Create The PDF document
  var myDoc = new PDFDocument({ bufferPages: true });

  let buffers = [];
  myDoc.on("data", buffers.push.bind(buffers));
  myDoc.on("end", () => {
    let pdfData = Buffer.concat(buffers);

    res
      .writeHead(200, {
        "Content-Length": Buffer.byteLength(pdfData),
        "Content-Type": "application/pdf",
        "Content-disposition": `attachment;filename=Bus_${datestamp}.pdf`,
      })
      .end(pdfData);
  });

  myDoc
    .fillColor("#444444")
    .fontSize(20)
    .text("Bus Details", 110, 57)
    .fontSize(10)
    .text("SMART LINE TRAVELS", 200, 50, { align: "right" })
    .text("101/1 New Kandy Road, Malabe", 200, 65, { align: "right" })
    .text("Tel No : +94112342310 | +94712345318", 200, 80, { align: "right" })
    .text("Email : smartlinetravels@gmail.com", 200, 95, { align: "right" })
    .text(datestamp, 200, 110, { align: "right" })
    .moveDown();

  // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
  const table = {
    headers: [
      "Bus Number",
      "Length (KM)",
      "Departure",
      "Destination",
      "Route Number",
      "Seats",
    ],
    rows: [],
  };

  for (const BusItem of BusRequest) {
    table.rows.push([
      BusItem.busNumberPlate,
      BusItem.length,
      BusItem.departure,
      BusItem.destination,
      BusItem.route,
      BusItem.seats,
    ]);
  }
  // Draw the table
  myDoc.moveDown().table(table, 15, 155, { width: 590 });
  myDoc.end();
});

module.exports = router;
