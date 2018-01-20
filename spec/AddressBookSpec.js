describe("Address Book", function() {
	var addressBook;
	var contact;

	beforeEach(function() {
		addressBook = new AddressBook();
		contact = new Contact();
	});

	it("should be able to add a contact", function() {
		addressBook.AddContact(contact);

		expect(addressBook.GetContact(0)).toBe(contact);
	});

	it("should be able to delete a contact", function() {
		addressBook.AddContact(contact);
		addressBook.DeleteContact(0);

		expect(addressBook.GetContact(0)).not.toBeDefined();
	});
});
