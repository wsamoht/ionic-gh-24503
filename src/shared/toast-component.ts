import { toastController } from '@ionic/vue'

export class ToastComponent {
    public async toast(): Promise<void> {
        const controller = await toastController.create({
            message: 'Hello',
            duration: 2,
        })
        controller.present()
    }
}