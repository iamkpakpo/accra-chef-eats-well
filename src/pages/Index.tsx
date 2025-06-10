import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, ExternalLink } from "lucide-react";

const Index = () => {
  const dishes = [
    {
      id: 1,
      name: "Jollof Rice Fusion",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Grilled Tilapia",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Kelewele Delight",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Waakye Special",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Red Red & Plantain",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Banku & Grilled Fish",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    }
  ];

  const services = [
    {
      title: "Private Cooking",
      description: "Intimate dining experiences in the comfort of your home with personalized menus crafted just for you.",
      price: "From GHS 200 per person"
    },
    {
      title: "Event Catering",
      description: "Full-service catering for weddings, corporate events, and special celebrations with authentic Ghanaian and international cuisine.",
      price: "Custom pricing available"
    },
    {
      title: "Meal Prep Services",
      description: "Weekly meal preparation with healthy, delicious options delivered fresh to your door.",
      price: "From GHS 150 per week"
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "+233123456789";
    const message = "Hello Grand Piquant! I'm interested in your culinary services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Simple TikTok icon component
  const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.932-.301 6.482 6.482 0 0 0-6.384 6.482 6.482 6.482 0 0 0 13.017.024v-6.017c.8.572 1.77.904 2.809.904a4.85 4.85 0 0 0 1.723-.310z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Grand Piquant</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Grand Piquant Catering</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Bringing the authentic flavors of Ghana to your table with a modern twist. 
              Experience culinary excellence in every bite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-warm"
                onClick={handleWhatsAppContact}
              >
                Book Your Experience
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About Grand Piquant Catering</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop" 
                  alt="Grand Piquant Catering" 
                  className="rounded-lg shadow-warm w-full"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Grand Piquant Catering is a Ghanaian-based boutique catering service offering bold, 
                  flavourful dishes with a personalized touch. We specialize in crafting memorable 
                  culinary experiences for intimate events, corporate functions, and special occasions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Blending local ingredients, vibrant spices, and global inspiration to suit your unique 
                  taste and vision, we bring restaurant-quality dining experiences directly to your venue. 
                  Every meal tells a story, celebrates culture, and creates lasting memories around the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Culinary Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <p className="text-primary font-semibold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish) => (
              <div key={dish.id} className="group relative overflow-hidden rounded-lg shadow-warm hover:shadow-xl transition-all duration-300">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{dish.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Let's Create Something Delicious</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to elevate your dining experience? Contact us to discuss your culinary needs, 
                and let's create an unforgettable meal together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <div className="text-foreground">Head Chef: 050 002 0888</div>
                    <div className="text-foreground">Sales & Marketing: 020 608 7056</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span className="text-foreground">info@grandpiquant.com</span>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppContact}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              >
                Message on WhatsApp
              </Button>
            </div>

            <Card className="shadow-warm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your full name" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Date</label>
                    <Input type="date" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your event, dietary preferences, and any special requests..."
                      className="w-full h-32"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/10 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.tiktok.com/@chefquamz_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon size={20} />
            </a>
            <a 
              href="https://www.instagram.com/chefquamz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © 2024 Grand Piquant Catering. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Website by <span className="text-primary font-semibold">Brndroid</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
