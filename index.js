const fs = require("fs");

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const cleanTimestamp = timestamp.replace(/[^\w\s]/gi, '');

    return cleanTimestamp;
}

const timestamp = getCurrentDateTime();


const filename = `${timestamp}.txt`;

fs.writeFile(`./Files/${filename}`, timestamp, "utf8", (err) => {
    if (err) {
        console.error("Error occurred while writing to file:", err);
    } else {
        console.log("File Created Successfully:", filename);
    }
});

fs.readFile(`./Files/${filename}`, "utf8", (error, data) => {
    if (error) {
        console.log("Error occurred while reading file:", error);
    } else {
        console.log("File Content:", data);
    }
});


function writeFileWithName(fileName = "") {
  fs.writeFile(`./Files/${fileName}`, "Hello B53 Folks", "utf8", () => {
    console.log("File created successfully");
  });
}
writeFileWithName('')


function readFileFromPath(fileName = "") {
  fs.readFile(`./Files/${fileName}`, "utf8", (error, data) => {
    if (error) console.log(error);
    else console.log(data);
  });
}

readFileFromPath("message.txt");

fs.readdir("./Files", (error, files) => {
  if (error) console.log(error);
  else {
    for (var file of files) {
      console.log(file.split("."));
      if (file.split(".")[1] === "txt") {
        console.log(file);
      }
    }
  }
});