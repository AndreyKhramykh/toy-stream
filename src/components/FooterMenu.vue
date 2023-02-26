<template>
        <div class="footer__wrapper">
            <p>© Toy.Stream, Inc.</p>
            <NavigationMenu class="footer__nav"/>
            <SocialNetworksIcons class="footer__socNetIcon"/>
        </div>
</template>
    
<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue';
import SocialNetworksIcons from '@/components/SocialNetworksIcons.vue'
</script>
    
<style lang="scss" scoped>
.footer {
    &__wrapper {
        background-color: var(--grey);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px;
        color: var(--footerTxt);
        font-size: 16px;
        font-weight: 500;
    }
    &__nav {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    &__socNetIcon {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
}
@media screen and (max-width: 768px) {
    .footer__nav {
        display: none;
    }
}
</style>