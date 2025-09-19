export default function getRef() {
    if (typeof window !== "undefined") {
        return localStorage.getItem('referralId') || '';
    }
    return '';
}