const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>kkkkk</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
     <p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const person = persons.find(
    (person) => person.id === Number(request.params.id)
  );
  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  persons = persons.filter((person) => person.id !== Number(request.params.id));
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  if (
    request.body.name &&
    request.body.number &&
    !persons.map((person) => person.name).includes(request.body.name)
  ) {
    const person = {
      id: Math.ceil(Math.random() * 10000),
      name: request.body.name,
      number: request.body.number,
    };
    persons = persons.concat(person);
    response.json(persons);
  } else if (
    request.body.name &&
    request.body.number &&
    persons.map((person) => person.name).includes(request.body.name)
  ) {
    response.status(400).json({ error: "name must be unique" });
  } else {
    response.status(400).json({ error: "content is missing" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
