<template>
    <!-- Inline css for adding background color of this card -->
    <div :style="{background: color}"> 
        <p>{{title}}</p>
        <!-- Iterate through the specs array and populate the data -->
        <li v-for="spec in specs">{{ spec.info }}</li>
    </div>    
</template>

<script>
export default {
    name: 'Card',
    props:{
        specs: Array,
        title: String,
        color: String
    }
}
</script>

<style scoped>
div{
    margin: 5px;
    padding: 5%;
    height: 325px;
    overflow: auto;
}

div::-webkit-scrollbar {
    width: 0.1em;
  }

div::-webkit-scrollbar-thumb {
    background-color: #888;
  }


div::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

p{
    padding-bottom: 1%;
    font-size: 26px;
}
</style>