    import { BOOKS_PER_PAGE, authors, genres, books, content } from "./data.js";

    
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

  //---- Opens settings for THEME-----
 /*
  * when the user clicks on the settings (moon and sun) button to change the layout theme */

    content.header.headerSettings.addEventListener("click", () => {
    content.settings.overlay.open = !content.settings.overlay.open;
    });

//----- Submit btn for THEME------
    content.settings.settingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    content.settings.overlay.close();
    
// Get the form data as an object
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
 
/*changes the color scheme of the application to match the selected theme*/
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);

//Saves the selected theme ("day" or "night") to local storage so that the theme persists even when  page is reloads.

    localStorage.setItem('theme', result.theme);
    v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'

 // Close the settings overlay if it was open
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

//!-----END OF THEMES---

// Preview page

/**
 * This code creates a preview page by extracting a subset of 
 * items from an array called 'matches' and dynamically creating 
 * a button element for each item.
 * 
 */

const fragment = document.createDocumentFragment();
const extracted = matches.slice(0, 36);

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
            </div>
          `;
  fragment.appendChild(element);
}
content.list.items.appendChild(fragment);

// --- SHOW MORE ----

    let remaining = matches.slice(BOOKS_PER_PAGE * page);

    content.list.btnList.innerHTML = /*HTML*/ 
    `<span>Show more</span>
    <span class = "list__remaining">${remaining.length - BOOKS_PER_PAGE}</span>`

    content.list.btnList.addEventListener("click", () => {
      const addList = remaining.slice(0, BOOKS_PER_PAGE);
      const moreList = remaining.length > BOOKS_PER_PAGE;//Boolean, if there are more books, display
      const fragment = document.createDocumentFragment();
      content.list.btnList.innerHTML = /* html */ `
      <span>Show more</span>
      <span class="list__remaining">
      ${remaining.length - BOOKS_PER_PAGE}</span>`;

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
/**
 * checks whether there are more books in the remaining 
 *  button is updated to display the number of books remaining, 
 * and the remaining array is updated to exclude the books that were just displayed.
 */
    if (moreList) {
        content.list.btnList.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining">
        ${remaining.length - BOOKS_PER_PAGE}</span>
        `;
        remaining = remaining.slice(0, BOOKS_PER_PAGE);
        page++;
        } else {
        content.list.btnList.style.display = "none";
        }
      });
//---END OF SHOW MORE--

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




 //!showing list dynamically START HERE CHANGE THE ELEMeNTS SO YOU CAN GET THE LIST 
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
//-------search titles-----

const titleInput = document.getElementById("titleInput");
const searchBar = document.getElementById('search');
let booksTitles = books;//creating a booksTitles array

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredTitles = booksTitles.filter((books) => {
   return (
   books.title.toLowerCase().includes(searchString)
   )
  });
  displayTitles(filteredTitles)
});

//!END------------------------

 //-----Search genres --------
const placeholder1 = document.createElement("option");
placeholder1.value = "";
placeholder1.textContent = "All genre";
content.search.findGenre.appendChild(placeholder1);

/* for...in loop to iterate over an object called genres. 
For each key-value pair in the genres object*/

for (const id in genres) {
  const element = document.createElement("option");
  element.value = id;
  element.textContent = `${genres[id]}`;
  content.search.findGenre.appendChild(element);
};

content.search.findGenre.addEventListener("change", (event) => {
  event.preventDefault();
  const selectedGenre = event.target.value;
  const filteredGenres = books.filter((books) => {
   return selectedGenre === " " || books.genres.includes(selectedGenre);
    });
  displayGenres(filteredGenres);
});

content.search.find.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedGenre = content.search.findGenre.value;
  const filteredGenres = books.filter((books) => {
    return (//There has to be a better
       books.title.toLowerCase().includes(content.search.findTitle.value.toLowerCase()) &&
      (selectedGenre === "" || books.genres === books.genres.includes(selectedGenre)) &&
      (content.search.findAuthor.value === "" || books.author === content.search.findAuthor.value)
    );
  });
  displayGenres(filteredGenres);
  content.search.overlay.toggleAttribute("open");
});



// ---- Search authors ----
const placeholder2 = document.createElement("option");
placeholder2.value = "";
placeholder2.textContent = "All Authors";
content.search.findAuthor.appendChild(placeholder2);

for (const id in authors) {
  const element = document.createElement("option");
  element.value = id;
  element.textContent = `${authors[id]}`;
  content.search.findAuthor.appendChild(element);
}

content.search.findAuthor.addEventListener("change", (event) => {
  event.preventDefault();
  const filteredTitles = books.filter((books) => {
  
  });
  displayTitles(filteredTitles);
});

content.search.find.addEventListener("click", (event) => {
  event.preventDefault();
  const filteredTitles = books.filter((books) => {
    return (//There has to be a better
      books.title.toLowerCase().includes(content.search.findTitle.value.toLowerCase()) &&
      (content.search.findGenre.value === "" || books.genres === content.search.findGenre.value) &&
      (content.search.findAuthor.value === "" || books.author === content.search.findAuthor.value)
    );
  });
  displayTitles(filteredTitles);
  content.search.overlay.toggleAttribute("open");
});
