<template>
    <header class="">
        <h1><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#0883d9" d="M36.232,23.985c0-5.865,4.766-8.51,4.966-8.636c-2.596-3.993-6.79-4.467-8.362-4.468	c-3.643,0-6.863,2.022-8.585,2.022c-1.797,0-4.418-2.121-7.363-2.022c-3.843,0.075-7.363,2.346-9.334,5.691	c-1.397,2.396-1.947,5.217-1.896,8.087c0.002,0.113,0.017,0.228,0.02,0.341H36.32C36.279,24.671,36.243,24.337,36.232,23.985z"></path><path fill="#0883d9" d="M30.565,7.063C32.261,5.191,33.21,2.621,33.06,0c-2.346,0-5.066,1.372-6.788,3.394	c-1.348,1.672-2.795,4.293-2.271,6.913C26.422,10.607,29.043,9.085,30.565,7.063z"></path><path fill="#0370c8" d="M17.511,45c2.771,0,3.794-1.848,7.413-1.848c3.37,0,4.418,1.848,7.338,1.848	c3.07,0,5.092-2.795,6.913-5.567c2.295-3.218,3.07-6.288,3.169-6.414c-0.094,0-5.287-2.112-6.026-8.019H5.678	c0.157,5.311,2.228,10.79,4.671,14.309C12.27,42.055,14.441,45,17.511,45z"></path>
</svg> {{title}}</h1>
        <!-- To give credit, I have inclued a link to apple's official website -->
        <a href="https://www.apple.com"><button class="btn btn-">Original Website</button></a>
    </header>
    
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title : {
                type: String,
                default: 'Apple',
            }
        }
    }
</script>

<style scoped>
    header{
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #808588;
    }

    a{
        text-decoration: none;
        margin-right: 5%;
    }

    h1{
        align-items: center;
        display: flex;
        margin-left: 5%;
        color: black;
    }

    button{
        background-color: #363636;
        color: #fff; 
        padding: 8px 20px; 
        font-size: 16px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
        display: flex; 
        align-items: center;
        
    }
</style>


