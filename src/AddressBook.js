var AddressBook = function() {
	this.contacts = [];
};

AddressBook.prototype.AddContact = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.GetContact = function(index) {
	return this.contacts[index];
};

AddressBook.prototype.DeleteContact = function(index) {
	this.contacts.splice(index, 1);
};
