import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const About = () => {
  return (
    <div>
       <h1 className="scroll-m-20 text-md tracking-tight text-blue-400 ">
            Paid plans
      </h1>
       <h1 className="scroll-m-20 py-4  text-5xl font-bold tracking-tight lg:text-4xl">
       Key information about <br /> <span className="text-blue-400 ">the paid plans</span>
      </h1>
      <div className="flex grid grid-cols-1 sm:justify-center md:justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mr-10">
      <div className="flex flex-col ">
  <Card className=" flex flex-col justify-center mb-6 ">
    <CardHeader>
      <CardTitle className="pb-2">Required quantity</CardTitle>
      <CardDescription>The number of developers licensed must correspond
        to the maximum number of concurrent developers
        contributing changes to the front-end code of the
        projects that use the software.
        You can learn more about this in the EULA.
      </CardDescription>
    </CardHeader>
  </Card>

  <Card className=" flex flex-col justify-center mb-6">
    <CardHeader>
      <CardTitle className="pb-2">Perpetual license model</CardTitle>
      <CardDescription>
        <p className="pb-3">
        The Perpetual license model offers the right to keep
            using your licensed versions forever in production
            and development. It comes with 12 months of
            maintenance (free updates & support).
        </p>
        <p className="pb-3">Upon expiration, you can renew your maintenance
        plan with a discount that depends on when you
        renew:
        </p>
        <p className="pl-6">
        before the support expires: 50% discount
            up to 60 days after the support has expired:
            35% discount
            more than 60 days after the support has
            expired: 15% discount
        </p>
      </CardDescription>
    </CardHeader>
  </Card>
</div>
      <div className="flex flex-col ">
  <Card className=" flex flex-col justify-center mb-6">
    <CardHeader>
      <CardTitle className="pb-2">Perpetual vs. Annual license model</CardTitle>
      <CardDescription>
        <p className="pb-4">On both license models, any version released before
        the end of your license term is forever available for
        applications deployed in production.
        </p>
        <p>
        The difference regards the right to use the
components for development purposes. Only the
perpetual license model allows you to continue
development once your license expires.
        </p>
      </CardDescription>
    </CardHeader>
  </Card>

  <Card className=" flex flex-col justify-center mb-6">
    <CardHeader>
      <CardTitle>Annual license model</CardTitle>
      <CardDescription>
        <p className="pb-3">
        The Annual license model requires an active license
to use the software in development. You will need to
renew your license if you wish to continue active
development after your current license term expires.
        </p>
        <p className="pb-3">The license is perpetual in production so you don't
need to renew your license if you have stopped
active development with the commercial
components.
        </p>
        <p>
        You can learn more about this in the EULA.

        </p>
      </CardDescription>
    </CardHeader>
  </Card>
</div>
      <div className="flex flex-col ">
  <Card className=" flex flex-col justify-center mb-6">
    <CardHeader>
      <CardTitle>Maintenance and support</CardTitle>
      <CardDescription>With your purchase, you receive support and access
to new versions for the duration of your subscription.
You can <span className="text-blue-400">learn more about support</span> in the docs. Note
that, except for critical issues, such as security flaws,
we release bug fixes and other improvements on top
of the latest version, instead of patching older
versions.
      </CardDescription>
    </CardHeader>
  </Card>

  <Card className=" flex flex-col justify-center mb-6">
    <CardHeader>
      <CardTitle>Volume discounts</CardTitle>
      <CardDescription>
        <p className="pb-3">
        The Pro plan is capped at 10 developers licensed;
        you do not need to pay for additional licenses for
        more than 10 developers.
        You can contact <span className="text-blue-400">sales</span> for a volume discount when
        licensing over 25 developers under the Premium
        plan.
        </p>
       
      </CardDescription>
    </CardHeader>
  </Card>
</div>
</div>

    </div>
  );
};

export default About;
