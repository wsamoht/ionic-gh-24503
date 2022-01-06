<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Toast Controller</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Toast Controller</ion-title>
                </ion-toolbar>
            </ion-header>
            <IonButton expand="block" @click="showToast">
                Show toast
            </IonButton>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from "@ionic/vue";
import { ToastComponent } from "@/shared/toast-component";

export default {
    components: {
        IonButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    },
    methods: {
        showToast(): void {
            const toast = new ToastComponent();
            toast.toast();
        },
    },
};
</script>