loadScript('react.js', (error, reactScript) => {
  if (error) {
    // handle error
  } else {
    // use reactScript data

    loadScript('Accordion.js', (error, accordionScript) => {
      if (error) {
        // handle error
      } else {
        // use script accordionScript

        loadScript('index.js', (error, scriptIndex) => {
          if (error) {
            // handle error
          } else {
            // use script scriptIndex

          }
        })
      }
    })
  }
})


function loadScript(path, callback) {
  setTimeout(() => { // some async action
    callback();
  }, 100)
}