import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Heart } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would authenticate
    localStorage.setItem('user', JSON.stringify({ email: loginData.email, name: 'Usuario' }));
    navigate('/perfil');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Mock registration
    localStorage.setItem('user', JSON.stringify({ email: registerData.email, name: registerData.name }));
    navigate('/perfil');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f5] to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white fill-white" />
            </div>
            <span className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>BuscanDog</span>
          </Link>
          <h2 className="text-3xl text-gray-900 mb-2">Bienvenido</h2>
          <p className="text-gray-600">Inicia sesión o crea una cuenta para continuar</p>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardContent className="pt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Correo electrónico</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="tu@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="login-password">Contraseña</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="text-right">
                      <a href="#" className="text-sm text-[#ff6b35] hover:underline">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    <Button type="submit" className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                      Iniciar Sesión
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>

              <TabsContent value="register">
                <CardContent className="pt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <Label htmlFor="register-name">Nombre completo</Label>
                      <Input
                        id="register-name"
                        placeholder="Juan Pérez"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="register-email">Correo electrónico</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="tu@email.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="register-password">Contraseña</Label>
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="register-confirm">Confirmar contraseña</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white">
                      Crear Cuenta
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>

        <p className="text-center text-sm text-gray-600 mt-6">
          Al continuar, aceptas nuestros{' '}
          <a href="#" className="text-[#ff6b35] hover:underline">Términos y Condiciones</a>
          {' '}y{' '}
          <a href="#" className="text-[#ff6b35] hover:underline">Política de Privacidad</a>
        </p>
      </div>
    </div>
  );
}
