 //Importing data from "./data.js"
    import { BOOKS_PER_PAGE, authors, genres, books, content } from "./data.js";
   
 //Select all books as matches and set them to page 1
    const matches = books;
    const page = 1;
    
 // Define two objects, day and night, with RGB color values for dark and light themes
    const css = {
      day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
      },
      night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
      },
    };

  // Opens settings for theme settings

  /*
  * when the user clicks on the settings (moon and sun) button to change the layout theme
  */
    content.header.headerSettings.addEventListener("click", () => {
    content.settings.overlay.open = !content.settings.overlay.open;
    });

 //Submit btn for Theme Settings
    content.settings.settingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    content.settings.overlay.close();
    
 // Get the form data as an object
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
 
 //Changes the color scheme of the application to match the selected theme
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);

 /**
  Saves the selected theme ("day" or "night") to local storage so that the theme persists even when  page is reloads.
  */
    localStorage.setItem('theme', result.theme);

 //Determines the user's preferred theme
    v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'

 // Close the settings overlay if was open
    if (content.settings.overlay.open){
    content.settings.overlay.open = false;
   }
 });
    
   document.addEventListener("DOMContentLoaded", () => {
   const localS = localStorage.getItem('theme');
 //console.log(`LocalStorage theme : ${localS}`);

    document.documentElement.style.setProperty('--color-dark', css[localS].dark);
    document.documentElement.style.setProperty('--color-light', css[localS].light);
    });
 //--- Close settings ----

  content.settings.settingCancel.addEventListener("click", () => {
  content.settings.overlay.close();

  });

 // Preview page

 /**
    This code creates a preview page by extracting a subset of 
    items from an array called 'matches' and dynamically creating 
     a button element for each item.
 */

 // Extract the first 36 books 
   const fragment = document.createDocumentFragment();
   const extracted = matches.slice(0, 36);

 //Loop over the extracted books to create a button element for each book
  for (const book of extracted) {
    const element = document.createElement("button");
    element.classList = "preview";
    element.dataset.id = book.id;
    element.dataset.image = book.image;
    element.dataset.title = book.title;
    element.dataset.authors = `${authors[book.author]}`;
    element.dataset.preview = book.id;
    element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${book.image}"
            />
            <div class="preview__info">
                <h3 class="preview__title">${book.title}</h3>
                <div class="preview__author">${authors[book.author]}</div>
            </div>`;

     fragment.appendChild(element);
    }

 // Append the button element to the list
  content.list.items.appendChild(fragment);

 // SHOW MORE
 /*
 *To show the additional books when the ''Show more'' button is clicked.
 *It dynamically creates the button element for each book and appends it to the list.
 */

 //Extract the remaining books from the matches.
   let remaining = matches.slice(BOOKS_PER_PAGE, matches.length);

 //Display the remaining books in the Show More button
    content.list.btnList.innerHTML = /*HTML*/ 
    `<span>Show more</span>
    <span class = "list__remaining">${remaining.length - 36}</span>`

    content.list.btnList.addEventListener("click", () => {
      const addList = remaining.slice(0, BOOKS_PER_PAGE);
      const moreList = remaining.length > BOOKS_PER_PAGE;//Boolean, if there are more books, display
      const fragment = document.createDocumentFragment();
      
      content.list.btnList.innerHTML = /* html */ `
      <span>Show more</span>
      <span class="list__remaining">
      ${remaining.length - 36}</span>`;
     
    for (let i = 0; i < addList.length; i++) {
        const element = document.createElement("button");
        element.classList.add("preview");
        element.dataset.id = addList[i].id;
        element.dataset.image = addList[i].image;
        element.dataset.title = addList[i].title;
        element.dataset.authors = `${authors[addList[i].author]}`;
        element.setAttribute("data-preview", addList[i].id);
        
        element.innerHTML = /* html */ `
          <img class="preview__image" src="${addList[i].image}" />
          <div class="preview__info">
            <h3 class="preview__title">${addList[i].title}</h3>
            <div class="preview__author">${authors[addList[i].author]}</div>
          </div>
        `;
        fragment.appendChild(element);
      }

    content.list.items.appendChild(fragment);

    if (moreList) {
        content.list.btnList.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining">
        ${remaining.length - BOOKS_PER_PAGE - 36}</span>
        `;
        remaining = remaining.slice(BOOKS_PER_PAGE, remaining.length);
        page++;
        } else {
        content.list.btnList.style.display = "none";
        }
      });

 //--- Preview Window ----

 /**
 * code listens for a click event on a book item,
 * finds the corresponding book from the books array, 
 * and updates the information in the list-active element to display the book's details..
 */
    content.list.items.addEventListener("click", (event) => {
      const pathArray = Array.from(event.path || event.composedPath());
      let active = null;

      for (let i = 0; i < pathArray.length; i++) {
        const node = pathArray[i];
        const previewId = node?.dataset?.preview;
      for (const singleBook of books) {
        if (singleBook.id === previewId) {
            active = singleBook;
            break;
          }
        }
        if (active) break;
      }
        if (!active) return;

    document.querySelector("[data-list-active]").open = true;
    document.querySelector("[data-list-image]").setAttribute("src", active.image);
    document.querySelector("[data-list-blur]").style.backgroundImage = `url('${active.image}')`;
    document.querySelector("[data-list-title]").textContent = active.title;
    document.querySelector("[data-list-subtitle]").textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    document.querySelector("[data-list-description]").textContent = active.description;});

 //---- Close Button for preview window----

    content.active.overlayClose.addEventListener("click", () => {
    content.active.overlay.close();
    });

 //----Search button------
    content.header.headerSearch.addEventListener("click", () => {
    content.search.overlay.toggleAttribute("open");
    });

    content.search.findCancel.addEventListener('click', () => {
    content.search.overlay.close();
    });

 //Search for book titles.

   function displayTitles(titles) {
 // Clear the current content before displaying the new titles
    const listItems = document.querySelector('.list__items');
    listItems.innerHTML = '';

 // Create a fragment to append the new elements to
   const fragment = document.createDocumentFragment();

 // Loop through the filtered titles and create a new button element for each one
  titles.forEach(title => {
    const element = document.createElement("button");
    element.classList.add("preview");
    element.dataset.id = title.id;
    element.dataset.image = title.image;
    element.dataset.title = title.title;
    element.dataset.authors = `${authors[title.author]}`;
    element.setAttribute("data-preview", title.id);
    element.innerHTML = /* html */ `
      <img class="preview__image" src="${title.image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title.title}</h3>
        <div class="preview__author">${authors[title.author]}</div>
      </div>
    `;
    fragment.appendChild(element);
    });

 // Append the fragment to the list items
   listItems.appendChild(fragment);
  }

 /**
 * Two main functions : search book by title and filter books by genre
 * 
 */
 //-------search titles-----

   const titleInput = document.getElementById("titleInput");
   const searchBar = document.getElementById("search");
   let booksTitles = books;//creating a booksTitles array

 /*
 SearchBar listens for the keyup event to check if the input string matches any book titles
  in the 'book titles' array
 */

 searchBar.addEventListener('keyup', (e) => {
   const searchString = e.target.value.toLowerCase();
   const filteredTitles = booksTitles.filter((books) => {
   return (
   books.title.toLowerCase().includes(searchString)
    )
   });

  if (filteredTitles.length === 0) {
    const error = document.createElement("div");
    error.classList.add("error-message");
    error.innerHTML = "No matching titles found. Please check your spelling and try again.";
    listItems.innerHTML = '';
    listItems.appendChild(error);
  } else {
    displayTitles(filteredTitles);
  } 
 });


 /**
 *'addOptionToSelect' is called twice as arguments.  
 * Function adds option to the given select element based on the options object.
 * Event listener filters the books based on selected option and displays them.
 */

  function addOptionsToSelect(select, options) {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = `All ${select.name}`;
    select.appendChild(placeholder);

  for (const id in options) {
    const element = document.createElement("option");
    element.value = id;
    element.textContent = `${options[id]}`;
    select.appendChild(element);
   }

  select.addEventListener("change", (event) => {
      event.preventDefault();
      const selectedOption = event.target.value;
      const filteredTitles = books.filter((book) => {
      return selectedOption === "" || book[select.name.toLowerCase()].includes(selectedOption);
    });
    displayTitles(filteredTitles);
   });
  }

  addOptionsToSelect(content.search.findGenre, genres);
  addOptionsToSelect(content.search.findAuthor, authors);

 //Listening for a 'click' event and triggers the search based on input
  content.search.find.addEventListener("click", (event) => {
    event.preventDefault();
    const filteredTitles = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(content.search.findTitle.value.toLowerCase()) &&
      (content.search.findGenre.value === "" || book.genres.includes(content.search.findGenre.value)) &&
      (content.search.findAuthor.value === "" || book.author === content.search.findAuthor.value)
    );
  });

   displayTitles(filteredTitles);
   content.search.overlay.toggleAttribute("open");
   });

