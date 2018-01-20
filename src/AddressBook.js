var AddressBook = function() {
	this.contacts = [];
	this.initialComplete = false;
};

AddressBook.prototype.GetInitialContacts = function(completeCallback) {
	var self = this; // Set up a variable to allow accessing "this" from function.

	setTimeout(function() {
		self.initialComplete = true;
		if(completeCallback) {
			return completeCallback();
		}
	}, 3);
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
