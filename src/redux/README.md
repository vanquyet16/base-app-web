import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setToken } from '@/redux/features/auth/authSlice';
import { setUser } from '@/redux/features/user/userSlice';

function LoginComponent() {
const dispatch = useAppDispatch();

const handleLogin = (username: string, token: string) => {
dispatch(setToken(token)); // This will be persisted
dispatch(setUser(username)); // This will be in regular state
};

// Access the state
const token = useAppSelector((state) => state.auth.token);
const { username, isAuthenticated } = useAppSelector((state) => state.user);

// ... rest of your component
}
