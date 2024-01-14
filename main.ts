import * as fs from "node:fs";
import * as csv from "csv";

const filePath = "enums.csv";

const processFile = fs
    .createReadStream(filePath)
    .pipe(csv.parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        console.log(row);
    });

