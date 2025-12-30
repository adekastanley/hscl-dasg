import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface AuthState {
  isAuthenticated: boolean
  toggleAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: !!Cookies.get('auth-token'),
      toggleAuth: () =>
        set((state) => {
          const newState = !state.isAuthenticated
          if (newState) {
            Cookies.set('auth-token', 'mock-token', { expires: 7 }) // Expires in 7 days
          } else {
            Cookies.remove('auth-token')
          }
          return { isAuthenticated: newState }
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
