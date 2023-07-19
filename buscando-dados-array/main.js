/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

// Número de categorias
const totalCategories = booksByCategory.length;
console.log(totalCategories);

// Número de autores

for (let typeCategory of booksByCategory) {
  console.log("Total de Livros da categoria: " + typeCategory.category);
  console.log(typeCategory.books.length);
}

function countAutores() {
  let autores = [];

  for (let category of booksByCategory) {
    for (let livro of category.books) {
      if (autores.indexOf(livro.author) == -1) {
        autores.push(livro.author);
      }
    }
  }

  console.log("O total de autores é: " + autores.length);
}

countAutores();

function livrosDoAuthor(autor) {
  let books = [];

  for (let category of booksByCategory) {
    for (let livro of category.books) {
      if (livro.author == autor) {
        books.push(livro.title);
      }
    }
  }

  if (autor) {
    console.log(`Os livros do autor ${autor} são: ${books.join(",")}`);
  }
  
}

livrosDoAuthor("Augusto Cury");
