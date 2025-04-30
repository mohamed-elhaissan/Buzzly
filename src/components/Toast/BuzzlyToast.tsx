import  motion from 'framer-motion'

type Props = {
    message: string;
    type: string;
    richColor? :boolean,
    position?:string,
}

function  checkIfRichColorEnabled(type:string, richColor: Props) {
    return "testing ! "
}

export default function BuzzlyToast({message}: Props) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="buzzly-toast"
            style={{
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px",
            }}
        >
            {message}

        </motion.div>
    );
}