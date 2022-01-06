import { loadingController } from "@ionic/core"

interface Options {
    text?: string
    definedText?: 'Saving' | 'Loading' | 'Deleting'
}

export class LoadingComponent {
    private options: Options
    private controller!: HTMLIonLoadingElement

    public constructor(options: Options) {
        this.options = options
    }

    public async initialize(): Promise<void> {
        this.controller = await loadingController.create({
            message: this.determineText()
        })
    }

    public present(): void {
        this.controller.present()
    }

    public dismiss(): void {
        this.controller.dismiss()
    }

    public static async create(options: Options): Promise<LoadingComponent> {
        const loader = new LoadingComponent(options)
        await loader.initialize()

        return loader
    }

    private determineText(): string {
        if (this.options.definedText) {
            return `${this.options.definedText}&hellip;`
        }

        return this.options.text ?? ''
    }
}