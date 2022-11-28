import PocketBase from 'pocketbase';
import fs from "fs";

const pb = new PocketBase("http://127.0.0.1:8090");

const records = await pb.collection("shortcuts").getFullList();
records.map((r) => {
    delete r.collectionId;
    delete r.collectionName;
    delete r.created;
    delete r.updated;
    delete r.expand;
});

console.log(records[0].key);

const recordsString = JSON.stringify(records, null, 2);

/* fs.writeFile("data/shortcuts.json", recordsString, function(err) {
    if (err) {
        console.log(err);
    }
}); */