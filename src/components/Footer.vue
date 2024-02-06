<template>
    <!-- Adding my email and linkedIn page url -->
    <header :class="'flex flex-row justify-center'">
        <p>Copyright &copy; 2023 All rights reserved | vikas.yadav@ucdenver.edu | <a href="https://www.linkedin.com/in/vikasyadav21/">LinkedIn</a> </p>
    </header>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    header{
        padding-top: 5px;
        /* Adding some space for footer */
        padding-bottom: 25px;
        padding-left: 20%;
        padding-right: 20%;
        background-color: #808588;
    }
</style>


