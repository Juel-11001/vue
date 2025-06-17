<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>
<script>
    export default{
        unmounted() {
            console.log("the component is unmount")
        },
        activated() {
            console.log("home component is activated!")
        },
        deactivated() {
            console.log("home component is deactivated")
        }
    }
</script>