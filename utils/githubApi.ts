interface Repo {
  name: String,
  url: String,
  description: String,
  homepage?: String,
  language: String,
  topics: Array<Object>,
}

export default function () {
  const repo : Repo = {
    name: "Biero",
    url: "#",
    description: "test",
    topics: [{1: 2}, {2: 3}]
  } 
  console.log(repo)
}
