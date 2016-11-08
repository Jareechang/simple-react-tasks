let itemStore = {
    collection: [],
    counter: 0,
    collectionClone: function() {
        /* returns clone of collection in reduced form by applying filter */
        return _.filter(this.collection,this.applyFilter)
    },
    applyFilter: function(item) {
        /* return all items by default */
        return item;
    },
    add: function(item) {
        this.collection.push({ ...item , id: this.counter++});
        this.emitChangeEvent();
    },
    remove: function(id) {
        return () => {
            this.collection = _.filter(this.collection, 
                                      item => item.id !== id);
            this.emitChangeEvent();
        }
    },
    searchText: function(text) {
        this.applyFilter = item => item.text.match(new RegExp(text, 'i'));
        this.emitChangeEvent();
    }
};

export default itemStore;
