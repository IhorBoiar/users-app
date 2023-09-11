import React from "react";

export interface IUserData {
  id: number
  username: string
  phone: string
  name: string
  email: string
  website: string
  posts: any[]
  albums: any[]
}

export interface IUsers {
  response: IUserData[]
  filtered: IUserData[]
}

export interface IItem {
  bundle: string
  label: string
}

export interface IItemData {
  id: number
  title: string
  body?: string
  userId: number
}

export interface IPageLayout {
  children: React.ReactNode
  title: string
}

export interface IFilters {
  data: any
  setData: Function
}

export interface ITableUsers {
  data: any
}