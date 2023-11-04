import Button from '@mui/material/Button';

enum ButtonType {
    General,
    BlueBox
}

export default function TopBarButton({ type, content }: { type: ButtonType, content: any }) {
    return (
        <div>
            {
                (() => {
                    switch (type) {
                        case ButtonType.BlueBox:
                            return (
                                <Button>{content}</Button>
                            )

                        default:
                            return (
                                <Button>{content}</Button>
                            )
                    }
                })()
            }
        </div>
    )
}