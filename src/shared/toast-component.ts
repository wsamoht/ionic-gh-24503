import { toastController } from '@ionic/vue'

export class ToastComponent {
    private controller!: HTMLIonToastElement

    public async initialize(): Promise<void> {
        this.controller = await toastController.create({
            message: 'Hello from show',
            duration: 3,
        })
    }

    public show(): void {
        this.controller.present()
    }

    public static async toast(): Promise<void> {
        const controller = await toastController.create({
            message: 'Hello from toast',
            duration: 3,
        })
        controller.present()
    }
}