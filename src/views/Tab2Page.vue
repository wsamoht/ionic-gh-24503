<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Toast Controller (buttons)</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">
                        Toast Controller (buttons)
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <IonButton expand="block" @click="showToastStatic">
                Show toast (static)
            </IonButton>
            <IonButton expand="block" @click="showToastInitialize">
                Show toast (initialize)
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
        showToastStatic(): void {
            ToastComponent.toast();
        },
        async showToastInitialize(): Promise<void> {
            const toast = new ToastComponent();
            await toast.initialize();
            toast.show();
        },
    },
};
</script>