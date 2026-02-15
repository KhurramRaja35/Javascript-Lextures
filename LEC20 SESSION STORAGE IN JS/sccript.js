// Session Storage:
// Stores data for the current browser tab/session only
// Data is cleared when the tab is closed
// Separate storage per tab
// Useful for temporary data (form inputs, current state)

// Local Storage:
// Stores data permanently (until manually cleared)
// Persists across browser sessions and tab closures
// Shared across all tabs from the same origin
// Useful for persistent user preferences, settings
// Key Differences:

// Feature	   Session Storage	         Local Storage
// Lifespan	   Until tab closes	         Until manually deleted
// Scope	   Single tab	All          tabs of same origin
// Use Case	  Temporary session data	Persistent user data
// Size	       ~5-10MB	                    ~5-10MB

//methods same as local storage
sessionStorage.setItem("name", "harry")
sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")
sessionStorage.removeItem("name")


// Storage Event
// A storage event is triggered when data in localStorage or sessionStorage is changed in another tab/window of the same origin.

// Key Points:
// Fires when storage is modified (add, update, delete)
// Does NOT fire in the tab that made the change
// Only fires in other tabs from the same origin
// Useful for syncing data across multiple tabs

// Storage Event Properties:
// event.key	The key that was changed (null if cleared)
// event.newValue	New value (or null if deleted)
// event.oldValue	Previous value
// event.storageArea	Reference to localStorage or sessionStorage
// event.url	URL of page that changed the storage



window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}
//this is how we listen the event across multiple pages


// Example2:
// Tab 1: Changed localStorage
// localStorage.setItem('username', 'John');

// // Tab 2: Listens for changes from other tabs
// window.addEventListener('storage', function(event) {
//   if (event.key === 'username') {
//     console.log('Old value:', event.oldValue);      // undefined
//     console.log('New value:', event.newValue);      // 'John'
//     console.log('Changed by:', event.url);          // URL of Tab 1
//   }
// });

// Clearing storage
// localStorage.clear();
// Storage event fires with: key=null, newValue=null, oldValue=previous_value
