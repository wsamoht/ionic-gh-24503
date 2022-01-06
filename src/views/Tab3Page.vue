<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Toast Controller (on mount)</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">
                        Toast Controller (on mount)
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <p class="ion-text-center">Toast shown on mount</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from "@ionic/vue";
import { ToastComponent } from "@/shared/toast-component";
import { onMounted } from "@vue/runtime-core";

export default {
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    },
    setup() {
        onMounted(() => ToastComponent.toast());
    },
};
</script>