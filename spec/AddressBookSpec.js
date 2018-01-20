describe("Address Book", function() {
	it("should be able to add a contact", function() {
		var addressBook = new AddressBook();
		var contact = new Contact();

		addressBook.AddContact(contact);

		expect(addressBook.GetContact(0)).toBe(contact);
	});

	it("should be able to delete a contact", function() {
		var addressBook = new AddressBook();
		var contact = new Contact();

		addressBook.AddContact(contact);
		addressBook.DeleteContact(0);

		expect(addressBook.GetContact(0)).not.toBeDefined();
	});
});
