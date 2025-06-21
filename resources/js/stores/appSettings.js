import { defineStore } from 'pinia';
import axios from 'axios';

export const useAppSettings = defineStore('appSettings', {
    state: () => ({
        navBarDrawer: true,
        miniNavBarFlag: false,
    }),

    actions: {
        toggleNavBarDrawer() {
            this.navBarDrawer = !this.navBarDrawer
        },

        toggleMiniNavBar() {
            this.miniNavBarFlag = !this.miniNavBarFlag
        }
    }

});
