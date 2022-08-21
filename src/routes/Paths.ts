export function home(): string {
    return "/login/:id"
}

export function governmentHomePath(): string {
    return "/government/home"
}

export function privateHomePath(): string {
    return "/private/home"
}

export function createEditOrderPath(): string {
    return "/government/home/create-edit"
}

export function governmentAcceptOrderPath(): string {
    return "/government/home/accept"
}
export function confirmRejectPath(): string {
    return "/government/home/confirmReject"
}
export function successRejectPath(): string {
    return "/government/home/success"
}
export function acceptOrderPath(): string {
    return "/private/home/accept"
}
export function cancelOrderPath(): string {
    return "/private/home/cancel"
}
export function rejectOrderPath(): string {
    return "/private/home/reject"
}
export function waitingOrderPath(): string {
    return "/private/home/waiting"
}
export function previewOrderPath(): string {
    return "/private/home/data/preview"
}

export function practitionerDataPath(): string {
    return "/private/home/data"
}
export function renewOrderPath(): string {
    return "/private/home/renew"
}
