const container = document.getElementById('todoContainer')
const findContainer = document.getElementById('findContainer')
const addTodoButton = document.getElementById('btnAdd')
const inputMessage = document.getElementById('inputMessage')
const inputTitle = document.getElementById('inputTitle')


   const main = async () =>{
      const response = await fetch('https://ossvcrp0z5.execute-api.us-east-1.amazonaws.com/dev')
      const data = await response.json()

      // data.name.forEach(todo => {
      //    container.innerHTML += `
      //    <div class="some-content">
      //       <h2 class="some-content-title">${todo.title}</h2>
      //       <h3 class="some-content-info">${todo.content}</h3>
      //    </div>`

      // })
   }

   main();



   addTodoButton.addEventListener('click', async () => {
      if (inputTitle.value && inputMessage.value) {
         //  const requestBody = {
         //      title: inputTitle.value,
         //      message: inputMessage.value
         //  };

         const response = await fetch('https://ossvcrp0z5.execute-api.us-east-1.amazonaws.com/dev', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({newTodo: inputTitle.value })
         });

         const data = await response.json();

         const newTodoElement = document.createElement('div');
         newTodoElement.classList.add('some-content');

         newTodoElement.innerHTML = `
            <h2 class="some-content-title">${inputTitle.value}</h2>
            <h3 class="some-content-info">${inputMessage.value}</h3>
         `;

         container.appendChild(newTodoElement);

         inputTitle.value = ''; 
         inputMessage.value = ''; 

      } else {
         alert('Будь ласка, введіть заголовок і повідомлення');
      }
});














// //Пошук ключового слова
//    function searchKeyword() {
//       // Отримати значення ключового слова з поля вводу
//       var keyword = document.getElementById('searchInput').value.toLowerCase();
  
//       // Отримати всі елементи, в яких треба шукати
//       var elementsToSearch = document.querySelectorAll('.contentToSearch');
  
//       // Очистити попередні результати
//       var searchResultsContainer = document.getElementById('searchResults');
//       searchResultsContainer.innerHTML = '';
  
//       // Пройтися по кожному елементу для пошуку ключового слова
//       elementsToSearch.forEach(function(element) {
//           var content = element.textContent.toLowerCase();
//           if (content.includes(keyword)) {
//               // Якщо знайдено ключове слово, вивести цей елемент у результати
//               var resultItem = document.createElement('div');
//               resultItem.textContent = content;
//               searchResultsContainer.appendChild(resultItem);
//           }
//       });
  
//       // Повідомлення про те, що пошук завершено
//       if (searchResultsContainer.children.length === 0) {
//           var noResultsMessage = document.createElement('div');
//           noResultsMessage.textContent = 'Нічого не знайдено';
//           searchResultsContainer.appendChild(noResultsMessage);
//       }
//   }