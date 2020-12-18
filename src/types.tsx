export type PhotosType={
    photo: string
}

export type UserType = {
    name: string
}

export type PageType = {
    year: number
    photos: Array<PhotosType>
    setYear: Function
}

export type AppType = {
    user: UserType
    page: PageType
    setYearAction: Function
}