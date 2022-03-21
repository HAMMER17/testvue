<template>
<ul class="sidenav app-sidenav open">
    <router-link
    v-for="link in links"
    :key="link.url"
    tag="li"
    active-class="active"
    :to="link.url"
    :exact="link.exact"
     ><li><a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a></li></router-link>
    </ul>
</template>

<script>
export default {
    props: ['value'],
    data: () => ({
        links: [
            { title: 'Счет', url: '/', exact: true },
            { title: 'История', url: '/history' },
            { title: 'Планирование', url: '/planning' },
            { title: 'Новая запись', url: '/record' },
            { title: 'Категория', url: '/categories' }
        ]
    })
};
</script>
