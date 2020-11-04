// Dado um array de objetos, remova os objetos com Nome duplicado:

const array = [
    {
       id: 1,
       name: "João",
    },
    {
       id: 2,
       name: "Maria",
    },
    {
       id: 3,
       name: "Paulo",
    },
    {
       id: 4,
       name: "Fabio",
    },
    {
       id: 5,
       name: "João",
    },
    {
       id: 6,
       name: "Paulo",
    },
]


const filteredArray = array.reduce((acc, current) => {
    const x = acc.find(item => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  console.log(filteredArray)