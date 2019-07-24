<template>
    <div>11</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'Sidebar',
    computed: {
        ...mapGetters([
            'permission_routes',
            // 'sidebar'
        ]),
    }
}
</script>

