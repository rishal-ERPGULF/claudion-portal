import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Footer = () => {
  return (
    <div className="border-t mt-5 pt-5">
      <div className="mx-20 block border-b">
        <div className="flex justify-between">
        <div className="block mb-5">
           <div>
            <h2 className="font-extrabold text-xl pb-4">MUI</h2>
            <h2 className="font-bold text-md">Keep up to date</h2>
            <p className="text-gray-500 py-2">Join our newsletter for regular updates. No spam ever.</p>
            <p className="text-gray-400">Your email</p>
            <div className="flex py-3">
            <Input type="email" placeholder="Email" />
            <Button>Subscribe</Button>
            </div>
           </div>
        </div>
        <div className="flex gap-12">
          <div >
            <h3 className="font-bold">Product</h3>
            <p className="text-gray-500">Material UI</p>
          <p className="text-gray-500">Base UI</p>
          <p className="text-gray-500">MUI X</p>
          <p className="text-gray-500">Templates</p>
          <p className="text-gray-500">MUI Toolpad</p>
          <p className="text-gray-500">Design kits</p>
          </div>
          <div>
          <h3 className="font-bold">Resources</h3>
            <p className="text-gray-500">Material UI</p>
          <p className="text-gray-500">Fress templates</p>
          <p className="text-gray-500">Components</p>
          <p className="text-gray-500">Customization</p>
          <p className="text-gray-500">Theming</p>
          </div>
          <div>
          <h3 className="font-bold">Explore</h3>
            <p className="text-gray-500">Documentation</p>
          <p className="text-gray-500">Store</p>
          <p className="text-gray-500">Blog</p>
          <p className="text-gray-500">Showcase</p>
          <p className="text-gray-500">Roadmap</p>
          </div>
          <div>
          <h3 className="font-bold">Company</h3>
            <p className="text-gray-500">About</p>
          <p className="text-gray-500">Vision</p>
          <p className="text-gray-500">Careers</p>
          <p className="text-gray-500">Support</p>
          <p className="text-gray-500">Privacy policy</p>
          <p className="text-gray-500">Contact us</p>
          </div>
        </div>
        </div>
        <div className="border-t flex justify-between py-5">
          <div>
            <p>Copyright © 2024 Material UI SAS, trading as MUI.</p>
          </div>
          <div>
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer