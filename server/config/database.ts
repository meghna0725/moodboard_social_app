const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://mm0523:LARsim0gQouTQni7@cluster1.pnllkrl.mongodb.net/?retryWrites=true&w=majority";

async function main() {
    const client = new MongoClient(uri);

    // put in a try catch block
    try {
        await client.connect();
        await listDatabases(client);
        await listCollections(client);
        await printDocuments(client); // Added this line to print documents
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`);
    });
}

async function listCollections(client) {
    const collectionsListCursor = await client.db().listCollections();
    const collections = await collectionsListCursor.toArray();

    console.log("Collections:");
    collections.forEach(col => {
        console.log(` - ${col.name}`);
    });
}

async function printDocuments(client) {
    const collection = client.db('user').collection('login_info'); // Adjust to your actual database and collection names

    try {
        const documents = await collection.find().toArray();
        console.log("Documents in login_info collection:");
        documents.forEach(doc => {
            console.log(doc);
        });
    } catch (err) {
        console.error('Error fetching documents:', err);
    }
}
