const { createApp } = Vue

createApp({
    data() {
        return {
            // creo un dato per contenere le email
            emails: [],
            // creo un dato per contare le email
            emailsCount: 0,
        }
    },
    methods: {
        // genero 10 chiamate all'API per ottenere 10 email
        getEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        // verifico dove si trovano le email nell oggetto di risposta
                        console.log(response);
                        // pusho le email randomiche nell'array emails
                        this.emails.push(response.data.response)
                        // incremento il contatore delle email
                        this.emailsCount++;
                        // se ho ottenuto 10 email, stampo in console l'array emails
                        if (this.emailsCount === 10) {
                            console.log(this.emails);
                        }
                    })
            }
        },

    },
    created() {
        // chiamo il metodo per ottenere le email
        this.getEmails();
    }
}).mount('#app')