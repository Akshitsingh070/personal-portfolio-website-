import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch, Star, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubProfile, useGitHubRepos, GITHUB_USERNAME_CONST } from "@/hooks/useGitHubData";

const GitHubSection = () => {
  const { profile, loading: profileLoading } = useGitHubProfile();
  const { repos, loading: reposLoading } = useGitHubRepos();

  return (
    <section id="github" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            <span className="text-gradient">GitHub</span> Activity
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16 text-sm">
            Live data from my GitHub profile — always up to date.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 mb-8"
          >
            {profileLoading ? (
              <div className="flex justify-center py-8"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
            ) : profile ? (
              <>
                <div className="flex items-center gap-5 mb-6">
                  <img src={profile.avatar_url} alt={profile.login} className="w-16 h-16 rounded-full border-2 border-primary/30" />
                  <div>
                    <h3 className="font-heading font-semibold text-xl">{profile.name || profile.login}</h3>
                    <p className="text-muted-foreground text-sm">{profile.bio || "Computer Science Student & Developer"}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: GitBranch, label: "Repositories", value: profile.public_repos },
                    { icon: Users, label: "Followers", value: profile.followers },
                    { icon: Star, label: "Following", value: profile.following },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-lg p-4 text-center">
                      <stat.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                      <p className="font-heading font-semibold text-lg">{stat.value}</p>
                      <p className="text-muted-foreground text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full rounded-full font-heading">
                  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />Visit GitHub Profile
                  </a>
                </Button>
              </>
            ) : (
              <p className="text-center text-muted-foreground">Unable to load GitHub profile.</p>
            )}
          </motion.div>

          {/* Recent Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-xl p-6 mb-8"
          >
            <h3 className="font-heading font-semibold text-lg mb-4">Recent Repositories</h3>
            {reposLoading ? (
              <div className="flex justify-center py-6"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>
            ) : repos.length > 0 ? (
              <div className="space-y-3">
                {repos.slice(0, 6).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-heading font-medium text-sm truncate group-hover:text-primary transition-colors">{repo.name}</p>
                      {repo.description && (
                        <p className="text-muted-foreground text-xs truncate mt-0.5">{repo.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 ml-4 shrink-0">
                      {repo.language && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{repo.language}</span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3" />{repo.stargazers_count}
                        </span>
                      )}
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center">No repositories found.</p>
            )}
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-xl p-6 text-center"
          >
            <img
              src={`https://ghchart.rshah.org/f97316/${GITHUB_USERNAME_CONST}`}
              alt="GitHub Contribution Graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
            <p className="text-muted-foreground text-xs mt-3">GitHub contribution activity</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
