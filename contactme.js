const contactMe = () => {
  checkOpen = 1;
  const forgame = document.getElementById('forgame');
  const forcalls = document.getElementById('forcalls');
  const anotherinner = document.getElementById('anotherinner');
  const showbalance = document.getElementById('showbalance');
  const infogenerate = document.getElementById('infogenerate');
  const callopacity = document.getElementById('callopacity');
  const forcallnumbers = document.getElementById('forcallnumbers');
  const saveContact = document.getElementById('saveContact');
  const viewSection = document.getElementById('viewSection');

  forgame.style.display = "none";
  forcalls.style.display = "none";
  anotherinner.style.display = "none";
  showbalance.style.display = "none";
  infogenerate.style.display = "none";
  callopacity.style.display = "none";
  forcallnumbers.style.display = "none";
  saveContact.style.display = "none";
  viewSection.style.display="block"
  saveContactContainer.style.display="block"
  
};
const loadContacts=()=> {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
      contacts = JSON.parse(storedContacts);
  }
}
loadContacts();

const saveContact=()=> {
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;

  contacts.push({ name, contact });
  saveToLocalStorage();

  document.getElementById('contactForm').reset();

  alert('Contact saved successfully!');
}

const saveToLocalStorage=()=> {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

const displayContacts=()=> {
  const contactList = document.getElementById('contactList');
  if (contactList) {
      contactList.innerHTML = '';

      contacts.forEach((contact, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>${contact.name}:</strong> ${contact.contact} 
                                <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>`;
          contactList.appendChild(listItem);
      });
  }
}

const deleteContact=(index)=> {
  contacts.splice(index, 1);
  saveToLocalStorage();
  displayContacts();
}

const goToViewSection=()=> {
  displayContacts();
  const saveContactSection = document.getElementById('saveContact');
  const viewSection = document.getElementById('viewSection');
  if (saveContactSection) saveContactSection.style.display = 'none';
  if (viewSection) viewSection.style.display = 'block';
}

const goToSaveSection=()=> {
  const viewSection = document.getElementById('viewSection');
  const saveContactSection = document.getElementById('saveContact');
  if (viewSection) viewSection.style.display = 'none';
  if (saveContactSection) saveContactSection.style.display = 'flex';
}
