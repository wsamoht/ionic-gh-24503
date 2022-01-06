<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Loading Component</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Loading Component</ion-title>
                </ion-toolbar>
            </ion-header>
            <IonButton expand="block" @click="showLoading">
                Show loading
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
import { LoadingComponent } from "@/shared/loading-component";

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
        async showLoading(): Promise<void> {
            const loading = await LoadingComponent.create({
                definedText: "Saving",
            });
            loading.present();
        },
    },
};
</script>