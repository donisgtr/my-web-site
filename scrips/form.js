const form = document.querySelector('#create-form');

console.log(form);

hamburger.addEventListener('click', () => {
    postForm();
})


async function postForm() {
    try {
        
        const rawResponse = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();

    } catch (error) {
        console.log(error);
    }
}

    
